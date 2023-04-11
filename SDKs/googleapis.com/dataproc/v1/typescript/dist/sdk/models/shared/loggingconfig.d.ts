import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LoggingConfigDriverLogLevelsEnum {
    LevelUnspecified = "LEVEL_UNSPECIFIED",
    All = "ALL",
    Trace = "TRACE",
    Debug = "DEBUG",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
    Fatal = "FATAL",
    Off = "OFF"
}
/**
 * The runtime logging config of the job.
 */
export declare class LoggingConfig extends SpeakeasyBase {
    /**
     * The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
     */
    driverLogLevels?: Record<string, LoggingConfigDriverLogLevelsEnum>;
}
