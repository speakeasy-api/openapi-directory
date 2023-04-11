import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAudioRendersSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class CreateAudioRendersResponse extends SpeakeasyBase {
    /**
     * OK
     */
    audioRendersListResults?: shared.AudioRendersListResults;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
