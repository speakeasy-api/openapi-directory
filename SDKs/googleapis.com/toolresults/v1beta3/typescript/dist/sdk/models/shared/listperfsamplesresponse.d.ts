import { SpeakeasyBase } from "../../../internal/utils";
import { PerfSample } from "./perfsample";
/**
 * Successful response
 */
export declare class ListPerfSamplesResponse extends SpeakeasyBase {
    /**
     * Optional, returned if result size exceeds the page size specified in the request (or the default page size, 500, if unspecified). It indicates the last sample timestamp to be used as page_token in subsequent request
     */
    nextPageToken?: string;
    perfSamples?: PerfSample[];
}
