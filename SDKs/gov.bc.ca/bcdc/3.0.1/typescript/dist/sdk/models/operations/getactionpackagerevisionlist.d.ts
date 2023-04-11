import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionPackageRevisionListRequest extends SpeakeasyBase {
    /**
     * The id or name of the dataset
     */
    id?: string;
}
export declare class GetActionPackageRevisionListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
