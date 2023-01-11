package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GradebookSettings
 * The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
**/
public class GradebookSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calculationType")
    public GradebookSettingsCalculationTypeEnum calculationType;
    public GradebookSettings withCalculationType(GradebookSettingsCalculationTypeEnum calculationType) {
        this.calculationType = calculationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displaySetting")
    public GradebookSettingsDisplaySettingEnum displaySetting;
    public GradebookSettings withDisplaySetting(GradebookSettingsDisplaySettingEnum displaySetting) {
        this.displaySetting = displaySetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeCategories")
    public GradeCategory[] gradeCategories;
    public GradebookSettings withGradeCategories(GradeCategory[] gradeCategories) {
        this.gradeCategories = gradeCategories;
        return this;
    }
}