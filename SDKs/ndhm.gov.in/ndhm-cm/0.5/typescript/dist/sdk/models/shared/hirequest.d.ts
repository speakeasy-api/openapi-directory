import { SpeakeasyBase } from "../../../internal/utils";
import { Consent } from "./consent";
import { DateRange } from "./daterange";
import { KeyMaterial } from "./keymaterial";
export declare class HIRequestHIRequest extends SpeakeasyBase {
    consent: Consent;
    dataPushUrl: string;
    dateRange: DateRange;
    keyMaterial: KeyMaterial;
}
export declare class HIRequest extends SpeakeasyBase {
    hiRequest: HIRequestHIRequest;
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
