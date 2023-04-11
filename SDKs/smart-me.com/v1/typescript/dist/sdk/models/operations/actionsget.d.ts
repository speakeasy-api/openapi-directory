import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetRequest extends SpeakeasyBase {
    /**
     * The ID of the device
     */
    id: string;
}
export declare class ActionsGetResponse extends SpeakeasyBase {
    /**
     * OK
     */
    actionInformations?: shared.ActionInformation[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
