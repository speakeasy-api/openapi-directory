import { SpeakeasyBase } from "../../../internal/utils";
import { InsuranceNetwork } from "./insurancenetwork";
/**
 * Response message for InsuranceNetworkService.ListInsuranceNetworks
 */
export declare class ListInsuranceNetworksResponse extends SpeakeasyBase {
    /**
     * A list of insurance networks that are supported by Google.
     */
    networks?: InsuranceNetwork[];
    /**
     * If there are more insurance networks than the requested page size, then this field is populated with a token to fetch the next page of insurance networks on a subsequent call to ListInsuranceNetworks.
     */
    nextPageToken?: string;
}
