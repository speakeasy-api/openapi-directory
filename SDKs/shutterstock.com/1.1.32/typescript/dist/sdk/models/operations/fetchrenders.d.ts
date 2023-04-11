import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchRendersSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class FetchRendersRequest extends SpeakeasyBase {
    /**
     * One or more render IDs
     */
    id: string[];
}
export declare class FetchRendersResponse extends SpeakeasyBase {
    /**
     * OK
     */
    audioRendersListResults?: shared.AudioRendersListResults;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
