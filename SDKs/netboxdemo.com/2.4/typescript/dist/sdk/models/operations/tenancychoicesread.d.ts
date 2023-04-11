import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TenancyChoicesReadRequest extends SpeakeasyBase {
    id: string;
}
export declare class TenancyChoicesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
