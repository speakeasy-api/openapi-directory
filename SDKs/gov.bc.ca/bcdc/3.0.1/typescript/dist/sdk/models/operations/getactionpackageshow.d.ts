import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionPackageShowRequest extends SpeakeasyBase {
    /**
     * The package name
     */
    id?: string;
}
export declare class GetActionPackageShowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
