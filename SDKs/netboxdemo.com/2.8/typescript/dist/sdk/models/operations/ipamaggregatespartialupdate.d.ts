import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamAggregatesPartialUpdateRequest extends SpeakeasyBase {
    writableAggregateInput: shared.WritableAggregateInput;
    /**
     * A unique integer value identifying this aggregate.
     */
    id: number;
}
export declare class IpamAggregatesPartialUpdateResponse extends SpeakeasyBase {
    aggregate?: shared.Aggregate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
