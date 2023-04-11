import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies options for initializing Link for [update mode](https://plaid.com/docs/link/update-mode).
 */
export declare class LinkTokenCreateRequestUpdate extends SpeakeasyBase {
    /**
     * If `true`, enables [update mode with Account Select](https://plaid.com/docs/link/update-mode/#using-update-mode-to-request-new-accounts).
     */
    accountSelectionEnabled?: boolean;
}
