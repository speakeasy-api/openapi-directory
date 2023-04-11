import { SpeakeasyBase } from "../../../internal/utils";
import { MigratingVm } from "./migratingvm";
/**
 * Response message for 'ListMigratingVms' request.
 */
export declare class ListMigratingVmsResponse extends SpeakeasyBase {
    /**
     * Output only. The list of Migrating VMs response.
     */
    migratingVms?: MigratingVm[];
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[];
}
