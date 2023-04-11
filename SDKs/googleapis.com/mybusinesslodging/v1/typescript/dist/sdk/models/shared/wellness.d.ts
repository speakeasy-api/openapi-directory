import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Doctor on call exception.
 */
export declare enum WellnessDoctorOnCallExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Elliptical machine exception.
 */
export declare enum WellnessEllipticalMachineExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Fitness center exception.
 */
export declare enum WellnessFitnessCenterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Free fitness center exception.
 */
export declare enum WellnessFreeFitnessCenterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Free weights exception.
 */
export declare enum WellnessFreeWeightsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Massage exception.
 */
export declare enum WellnessMassageExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Salon exception.
 */
export declare enum WellnessSalonExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Sauna exception.
 */
export declare enum WellnessSaunaExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Spa exception.
 */
export declare enum WellnessSpaExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Treadmill exception.
 */
export declare enum WellnessTreadmillExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Weight machine exception.
 */
export declare enum WellnessWeightMachineExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Guest facilities at the property to promote or maintain health, beauty, and fitness.
 */
export declare class Wellness extends SpeakeasyBase {
    /**
     * Doctor on call. The hotel has a contract with a medical professional who provides services to hotel guests should they fall ill during their stay. The doctor may or may not have an on-site office or be at the hotel at all times.
     */
    doctorOnCall?: boolean;
    /**
     * Doctor on call exception.
     */
    doctorOnCallException?: WellnessDoctorOnCallExceptionEnum;
    /**
     * Elliptical machine. An electric, stationary fitness machine with pedals that simulates climbing, walking or running and provides a user-controlled range of speeds and tensions. May not have arm-controlled levers to work out the upper body as well. Commonly found in a gym, fitness room, health center, or health club.
     */
    ellipticalMachine?: boolean;
    /**
     * Elliptical machine exception.
     */
    ellipticalMachineException?: WellnessEllipticalMachineExceptionEnum;
    /**
     * Fitness center. A room or building at the hotel containing equipment to promote physical activity, such as treadmills, elliptical machines, stationary bikes, weight machines, free weights, and/or stretching mats. Use of the fitness center can be free or for a fee. May or may not be staffed. May or may not offer instructor-led classes in various styles of physical conditioning. May or may not be open 24/7. May or may not include locker rooms and showers. Also known as health club, gym, fitness room, health center.
     */
    fitnessCenter?: boolean;
    /**
     * Fitness center exception.
     */
    fitnessCenterException?: WellnessFitnessCenterExceptionEnum;
    /**
     * Free fitness center. Guests may use the fitness center for free.
     */
    freeFitnessCenter?: boolean;
    /**
     * Free fitness center exception.
     */
    freeFitnessCenterException?: WellnessFreeFitnessCenterExceptionEnum;
    /**
     * Free weights. Individual handheld fitness equipment of varied weights used for upper body strength training or bodybuilding. Also known as barbells, dumbbells, or kettlebells. Often stored on a rack with the weights arranged from light to heavy. Commonly found in a gym, fitness room, health center, or health club.
     */
    freeWeights?: boolean;
    /**
     * Free weights exception.
     */
    freeWeightsException?: WellnessFreeWeightsExceptionEnum;
    /**
     * Massage. A service provided by a trained massage therapist involving the physical manipulation of a guest's muscles in order to achieve relaxation or pain relief.
     */
    massage?: boolean;
    /**
     * Massage exception.
     */
    massageException?: WellnessMassageExceptionEnum;
    /**
     * Salon. A room at the hotel where professionals provide hair styling services such as shampooing, blow drying, hair dos, hair cutting and hair coloring. Also known as hairdresser or beauty salon.
     */
    salon?: boolean;
    /**
     * Salon exception.
     */
    salonException?: WellnessSalonExceptionEnum;
    /**
     * Sauna. A wood-paneled room heated to a high temperature where guests sit on built-in wood benches for the purpose of perspiring and relaxing their muscles. Can be dry or slightly wet heat. Not a steam room.
     */
    sauna?: boolean;
    /**
     * Sauna exception.
     */
    saunaException?: WellnessSaunaExceptionEnum;
    /**
     * Spa. A designated area, room or building at the hotel offering health and beauty treatment through such means as steam baths, exercise equipment, and massage. May also offer facials, nail care, and hair care. Services are usually available by appointment and for an additional fee. Does not apply if hotel only offers a steam room; must offer other beauty and/or health treatments as well.
     */
    spa?: boolean;
    /**
     * Spa exception.
     */
    spaException?: WellnessSpaExceptionEnum;
    /**
     * Treadmill. An electric stationary fitness machine that simulates a moving path to promote walking or running within a range of user-controlled speeds and inclines. Also known as running machine. Commonly found in a gym, fitness room, health center, or health club.
     */
    treadmill?: boolean;
    /**
     * Treadmill exception.
     */
    treadmillException?: WellnessTreadmillExceptionEnum;
    /**
     * Weight machine. Non-electronic fitness equipment designed for the user to target the exertion of different muscles. Usually incorporates a padded seat, a stack of flat weights and various bars and pulleys. May be designed for toning a specific part of the body or may involve different user-controlled settings, hardware and pulleys so as to provide an overall workout in one machine. Commonly found in a gym, fitness center, fitness room, or health club.
     */
    weightMachine?: boolean;
    /**
     * Weight machine exception.
     */
    weightMachineException?: WellnessWeightMachineExceptionEnum;
}
