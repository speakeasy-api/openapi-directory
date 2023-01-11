import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MoveTableToDatabaseRequest
/** 
 * Request message for DataprocMetastore.MoveTableToDatabase.
**/
export class MoveTableToDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dbName" })
  dbName?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationDbName" })
  destinationDbName?: string;

  @SpeakeasyMetadata({ data: "json, name=tableName" })
  tableName?: string;
}
