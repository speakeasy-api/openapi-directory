import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AlterMetadataResourceLocationRequest
/** 
 * Request message for DataprocMetastore.AlterMetadataResourceLocation.
**/
export class AlterMetadataResourceLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationUri" })
  locationUri?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
