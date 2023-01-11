import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateDhlExpressSettingsRequestBody
/** 
 * A DHL Express account settings
**/
export class UpdateDhlExpressSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_primary_account" })
  isPrimaryAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=should_hide_account_number_on_archive_doc" })
  shouldHideAccountNumberOnArchiveDoc?: boolean;
}
