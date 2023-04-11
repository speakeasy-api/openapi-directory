import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IpamChoicesReadRequest extends SpeakeasyBase {
    id: string;
}
export declare class IpamChoicesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
