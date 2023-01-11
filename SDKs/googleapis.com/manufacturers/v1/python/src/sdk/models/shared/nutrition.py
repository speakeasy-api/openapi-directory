import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import floatunit as shared_floatunit
from ..shared import voluntarynutritionfact as shared_voluntarynutritionfact


@dataclass_json
@dataclasses.dataclass
class Nutrition:
    added_sugars: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedSugars') }})
    added_sugars_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedSugarsDailyPercentage') }})
    calcium: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calcium') }})
    calcium_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calciumDailyPercentage') }})
    cholesterol: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cholesterol') }})
    cholesterol_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cholesterolDailyPercentage') }})
    dietary_fiber: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dietaryFiber') }})
    dietary_fiber_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dietaryFiberDailyPercentage') }})
    energy: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energy') }})
    energy_from_fat: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyFromFat') }})
    folate_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folateDailyPercentage') }})
    folate_folic_acid: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folateFolicAcid') }})
    folate_mcg_dfe: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folateMcgDfe') }})
    iron: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iron') }})
    iron_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ironDailyPercentage') }})
    monounsaturated_fat: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monounsaturatedFat') }})
    nutrition_fact_measure: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nutritionFactMeasure') }})
    polyols: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polyols') }})
    polyunsaturated_fat: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polyunsaturatedFat') }})
    potassium: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('potassium') }})
    potassium_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('potassiumDailyPercentage') }})
    prepared_size_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preparedSizeDescription') }})
    protein: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protein') }})
    protein_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proteinDailyPercentage') }})
    saturated_fat: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturatedFat') }})
    saturated_fat_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturatedFatDailyPercentage') }})
    serving_size_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingSizeDescription') }})
    serving_size_measure: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingSizeMeasure') }})
    servings_per_container: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingsPerContainer') }})
    sodium: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sodium') }})
    sodium_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sodiumDailyPercentage') }})
    starch: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starch') }})
    total_carbohydrate: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCarbohydrate') }})
    total_carbohydrate_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCarbohydrateDailyPercentage') }})
    total_fat: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFat') }})
    total_fat_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFatDailyPercentage') }})
    total_sugars: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSugars') }})
    total_sugars_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSugarsDailyPercentage') }})
    trans_fat: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transFat') }})
    trans_fat_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transFatDailyPercentage') }})
    vitamin_d: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vitaminD') }})
    vitamin_d_daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vitaminDDailyPercentage') }})
    voluntary_nutrition_fact: Optional[list[shared_voluntarynutritionfact.VoluntaryNutritionFact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voluntaryNutritionFact') }})
    
