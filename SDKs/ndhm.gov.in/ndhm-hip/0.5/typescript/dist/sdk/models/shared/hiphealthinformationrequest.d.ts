import { SpeakeasyBase } from "../../../internal/utils";
import { Consent } from "./consent";
import { DateRange } from "./daterange";
import { KeyMaterial } from "./keymaterial";
export declare class HIPHealthInformationRequestHiRequest extends SpeakeasyBase {
    consent: Consent;
    dataPushUrl: string;
    dateRange: DateRange;
    keyMaterial: KeyMaterial;
}
export declare class HIPHealthInformationRequest extends SpeakeasyBase {
    hiRequest: HIPHealthInformationRequestHiRequest;
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
    transactionId: string;
}
