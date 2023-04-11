import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrackSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Amount of detail to render in the response
 */
export declare enum GetTrackViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetTrackRequest extends SpeakeasyBase {
    /**
     * Audio track ID
     */
    id: number;
    /**
     * The ID of the search that is related to this request
     */
    searchId?: string;
    /**
     * Amount of detail to render in the response
     */
    view?: GetTrackViewEnum;
}
export declare class GetTrackResponse extends SpeakeasyBase {
    /**
     * OK
     */
    audio?: shared.Audio;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
