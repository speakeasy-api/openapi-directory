import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConferenceProperties extends SpeakeasyBase {
    /**
     * The types of conference solutions that are supported for this calendar.
     *
     * @remarks
     * The possible values are:
     * - "eventHangout"
     * - "eventNamedHangout"
     * - "hangoutsMeet"  Optional.
     */
    allowedConferenceSolutionTypes?: string[];
}
