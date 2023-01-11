import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gradecategory as shared_gradecategory

class GradebookSettingsCalculationTypeEnum(str, Enum):
    CALCULATION_TYPE_UNSPECIFIED = "CALCULATION_TYPE_UNSPECIFIED"
    TOTAL_POINTS = "TOTAL_POINTS"
    WEIGHTED_CATEGORIES = "WEIGHTED_CATEGORIES"

class GradebookSettingsDisplaySettingEnum(str, Enum):
    DISPLAY_SETTING_UNSPECIFIED = "DISPLAY_SETTING_UNSPECIFIED"
    SHOW_OVERALL_GRADE = "SHOW_OVERALL_GRADE"
    HIDE_OVERALL_GRADE = "HIDE_OVERALL_GRADE"
    SHOW_TEACHERS_ONLY = "SHOW_TEACHERS_ONLY"


@dataclass_json
@dataclasses.dataclass
class GradebookSettings:
    r"""GradebookSettings
    The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
    """
    
    calculation_type: Optional[GradebookSettingsCalculationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calculationType') }})
    display_setting: Optional[GradebookSettingsDisplaySettingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displaySetting') }})
    grade_categories: Optional[list[shared_gradecategory.GradeCategory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradeCategories') }})
    
