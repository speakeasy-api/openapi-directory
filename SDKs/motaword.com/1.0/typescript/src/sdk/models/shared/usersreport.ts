import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { PagingMeta } from "./pagingmeta";



export class UsersReportReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spending" })
  spending?: number;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;

  @SpeakeasyMetadata({ data: "json, name=word_count" })
  wordCount?: number;
}


export class UsersReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;

  @SpeakeasyMetadata({ data: "json, name=report", elemType: UsersReportReport })
  report?: UsersReportReport[];
}
