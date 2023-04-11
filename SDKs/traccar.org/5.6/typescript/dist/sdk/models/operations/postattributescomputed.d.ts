import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostAttributesComputedResponse extends SpeakeasyBase {
    /**
     * OK
     */
    attribute?: shared.Attribute;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
