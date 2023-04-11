import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExtrasCustomFieldChoicesReadRequest extends SpeakeasyBase {
    id: string;
}
export declare class ExtrasCustomFieldChoicesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
