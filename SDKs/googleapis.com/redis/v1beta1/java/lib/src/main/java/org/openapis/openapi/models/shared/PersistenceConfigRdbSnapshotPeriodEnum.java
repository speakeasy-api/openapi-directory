/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * PersistenceConfigRdbSnapshotPeriodEnum - Optional. Period between RDB snapshots. Snapshots will be attempted every period starting from the provided snapshot start time. For example, a start time of 01/01/2033 06:45 and SIX_HOURS snapshot period will do nothing until 01/01/2033, and then trigger snapshots every day at 06:45, 12:45, 18:45, and 00:45 the next day, and so on. If not provided, TWENTY_FOUR_HOURS will be used as default.
 */
public enum PersistenceConfigRdbSnapshotPeriodEnum {
    SNAPSHOT_PERIOD_UNSPECIFIED("SNAPSHOT_PERIOD_UNSPECIFIED"),
    ONE_HOUR("ONE_HOUR"),
    SIX_HOURS("SIX_HOURS"),
    TWELVE_HOURS("TWELVE_HOURS"),
    TWENTY_FOUR_HOURS("TWENTY_FOUR_HOURS");

    @JsonValue
    public final String value;

    private PersistenceConfigRdbSnapshotPeriodEnum(String value) {
        this.value = value;
    }
}
