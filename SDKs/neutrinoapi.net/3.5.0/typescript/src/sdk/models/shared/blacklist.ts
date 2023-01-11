import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Blacklist extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isListed" })
  isListed: boolean;

  @SpeakeasyMetadata({ data: "json, name=listHost" })
  listHost: string;

  @SpeakeasyMetadata({ data: "json, name=listName" })
  listName: string;

  @SpeakeasyMetadata({ data: "json, name=listRating" })
  listRating: number;

  @SpeakeasyMetadata({ data: "json, name=responseTime" })
  responseTime: number;

  @SpeakeasyMetadata({ data: "json, name=returnCode" })
  returnCode: string;

  @SpeakeasyMetadata({ data: "json, name=txtRecord" })
  txtRecord: string;
}
