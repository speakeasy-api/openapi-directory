import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimRackGroupsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this rack group.
     */
    id: number;
}
export declare class DcimRackGroupsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
