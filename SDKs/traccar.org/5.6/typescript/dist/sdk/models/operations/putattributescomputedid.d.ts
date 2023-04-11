import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutAttributesComputedIdRequest extends SpeakeasyBase {
    attribute: shared.Attribute;
    id: number;
}
export declare class PutAttributesComputedIdResponse extends SpeakeasyBase {
    /**
     * OK
     */
    attribute?: shared.Attribute;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
