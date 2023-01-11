import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryMetadataRequest
/** 
 * Request message for DataprocMetastore.QueryMetadata.
**/
export class QueryMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;
}
