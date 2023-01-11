import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DhlExpressSettingsResponseBody
/** 
 * A DHL Express account settings
**/
export class DhlExpressSettingsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_primary_account" })
  isPrimaryAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=should_hide_account_number_on_archive_doc" })
  shouldHideAccountNumberOnArchiveDoc?: boolean;
}
