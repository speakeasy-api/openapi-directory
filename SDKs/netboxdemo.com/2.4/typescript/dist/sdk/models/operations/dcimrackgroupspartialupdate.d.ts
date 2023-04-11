import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRackGroupsPartialUpdateRequest extends SpeakeasyBase {
    writableRackGroupInput: shared.WritableRackGroupInput;
    /**
     * A unique integer value identifying this rack group.
     */
    id: number;
}
export declare class DcimRackGroupsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rackGroup?: shared.RackGroup;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
