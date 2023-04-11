import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRackGroupsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this rack group.
     */
    id: number;
}
export declare class DcimRackGroupsReadResponse extends SpeakeasyBase {
    contentType: string;
    rackGroup?: shared.RackGroup;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
