/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum PicoChargingHistoryDataTransactionStopReasonEnum {
    UNKNOWN("Unknown"),
    CAR_DISCONNECTED("CarDisconnected"),
    REMOTE_STOP("RemoteStop"),
    ERROR_STOP("ErrorStop"),
    INSTALLATION_MODE("InstallationMode"),
    CABLE_ERROR("CableError"),
    DIODE_ERROR("DiodeError"),
    RCD_ERROR("RcdError"),
    OVERLOAD_ERROR("OverloadError");

    @JsonValue
    public final String value;

    private PicoChargingHistoryDataTransactionStopReasonEnum(String value) {
        this.value = value;
    }
}
