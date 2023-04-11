import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class VirtualizationChoicesReadRequest extends SpeakeasyBase {
    id: string;
}
export declare class VirtualizationChoicesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
