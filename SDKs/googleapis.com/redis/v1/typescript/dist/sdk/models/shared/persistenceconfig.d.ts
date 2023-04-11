import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.
 */
export declare enum PersistenceConfigPersistenceModeEnum {
    PersistenceModeUnspecified = "PERSISTENCE_MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    Rdb = "RDB"
}
/**
 * Optional. Period between RDB snapshots. Snapshots will be attempted every period starting from the provided snapshot start time. For example, a start time of 01/01/2033 06:45 and SIX_HOURS snapshot period will do nothing until 01/01/2033, and then trigger snapshots every day at 06:45, 12:45, 18:45, and 00:45 the next day, and so on. If not provided, TWENTY_FOUR_HOURS will be used as default.
 */
export declare enum PersistenceConfigRdbSnapshotPeriodEnum {
    SnapshotPeriodUnspecified = "SNAPSHOT_PERIOD_UNSPECIFIED",
    OneHour = "ONE_HOUR",
    SixHours = "SIX_HOURS",
    TwelveHours = "TWELVE_HOURS",
    TwentyFourHours = "TWENTY_FOUR_HOURS"
}
/**
 * Configuration of the persistence functionality.
 */
export declare class PersistenceConfigInput extends SpeakeasyBase {
    /**
     * Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.
     */
    persistenceMode?: PersistenceConfigPersistenceModeEnum;
    /**
     * Optional. Period between RDB snapshots. Snapshots will be attempted every period starting from the provided snapshot start time. For example, a start time of 01/01/2033 06:45 and SIX_HOURS snapshot period will do nothing until 01/01/2033, and then trigger snapshots every day at 06:45, 12:45, 18:45, and 00:45 the next day, and so on. If not provided, TWENTY_FOUR_HOURS will be used as default.
     */
    rdbSnapshotPeriod?: PersistenceConfigRdbSnapshotPeriodEnum;
    /**
     * Optional. Date and time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. If not provided, the current time will be used.
     */
    rdbSnapshotStartTime?: string;
}
/**
 * Configuration of the persistence functionality.
 */
export declare class PersistenceConfig extends SpeakeasyBase {
    /**
     * Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.
     */
    persistenceMode?: PersistenceConfigPersistenceModeEnum;
    /**
     * Output only. The next time that a snapshot attempt is scheduled to occur.
     */
    rdbNextSnapshotTime?: string;
    /**
     * Optional. Period between RDB snapshots. Snapshots will be attempted every period starting from the provided snapshot start time. For example, a start time of 01/01/2033 06:45 and SIX_HOURS snapshot period will do nothing until 01/01/2033, and then trigger snapshots every day at 06:45, 12:45, 18:45, and 00:45 the next day, and so on. If not provided, TWENTY_FOUR_HOURS will be used as default.
     */
    rdbSnapshotPeriod?: PersistenceConfigRdbSnapshotPeriodEnum;
    /**
     * Optional. Date and time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. If not provided, the current time will be used.
     */
    rdbSnapshotStartTime?: string;
}
