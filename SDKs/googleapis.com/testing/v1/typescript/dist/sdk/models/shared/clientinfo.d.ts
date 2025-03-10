import { SpeakeasyBase } from "../../../internal/utils";
import { ClientInfoDetail } from "./clientinfodetail";
/**
 * Information about the client which invoked the test.
 */
export declare class ClientInfo extends SpeakeasyBase {
    /**
     * The list of detailed information about client.
     */
    clientInfoDetails?: ClientInfoDetail[];
    /**
     * Required. Client name, such as gcloud.
     */
    name?: string;
}
