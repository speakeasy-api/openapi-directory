import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateIndexWithPrimaryKeyRequestBody extends SpeakeasyBase {
    primaryKey?: string;
    uid?: string;
}
export declare class CreateIndexWithPrimaryKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
