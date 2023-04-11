import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExtrasChoicesReadRequest extends SpeakeasyBase {
    id: string;
}
export declare class ExtrasChoicesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
