import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsProvidersUpdateRequest extends SpeakeasyBase {
    providerInput: shared.ProviderInput;
    /**
     * A unique integer value identifying this provider.
     */
    id: number;
}
export declare class CircuitsProvidersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    provider?: shared.Provider;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
