import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValuesInPastGetRequest extends SpeakeasyBase {
    /**
     * the date of the value
     */
    date: Date;
    /**
     * The ID of the device
     */
    id: string;
}
export declare class ValuesInPastGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    valuesData?: shared.ValuesData;
}
