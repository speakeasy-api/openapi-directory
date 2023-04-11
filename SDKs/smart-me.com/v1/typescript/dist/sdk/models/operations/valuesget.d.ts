import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValuesGetRequest extends SpeakeasyBase {
    /**
     * The ID of the device
     */
    id: string;
}
export declare class ValuesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    valuesData?: shared.ValuesData;
}
