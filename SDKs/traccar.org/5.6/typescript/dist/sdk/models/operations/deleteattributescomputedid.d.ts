import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAttributesComputedIdRequest extends SpeakeasyBase {
    id: number;
}
export declare class DeleteAttributesComputedIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
