import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the current value when compared to the warning and alarm levels for the receiving or transmitting transceiver. Possible states include: - OK: The value has not crossed a warning threshold. - LOW_WARNING: The value has crossed below the low warning threshold. - HIGH_WARNING: The value has crossed above the high warning threshold. - LOW_ALARM: The value has crossed below the low alarm threshold. - HIGH_ALARM: The value has crossed above the high alarm threshold.
 */
export declare enum InterconnectDiagnosticsLinkOpticalPowerStateEnum {
    HighAlarm = "HIGH_ALARM",
    HighWarning = "HIGH_WARNING",
    LowAlarm = "LOW_ALARM",
    LowWarning = "LOW_WARNING",
    Ok = "OK"
}
export declare class InterconnectDiagnosticsLinkOpticalPower extends SpeakeasyBase {
    /**
     * The status of the current value when compared to the warning and alarm levels for the receiving or transmitting transceiver. Possible states include: - OK: The value has not crossed a warning threshold. - LOW_WARNING: The value has crossed below the low warning threshold. - HIGH_WARNING: The value has crossed above the high warning threshold. - LOW_ALARM: The value has crossed below the low alarm threshold. - HIGH_ALARM: The value has crossed above the high alarm threshold.
     */
    state?: InterconnectDiagnosticsLinkOpticalPowerStateEnum;
    /**
     * Value of the current receiving or transmitting optical power, read in dBm. Take a known good optical value, give it a 10% margin and trigger warnings relative to that value. In general, a -7dBm warning and a -11dBm alarm are good optical value estimates for most links.
     */
    value?: number;
}
