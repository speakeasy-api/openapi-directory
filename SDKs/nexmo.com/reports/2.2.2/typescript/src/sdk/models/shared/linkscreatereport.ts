import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LinksCreateReportSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class LinksCreateReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksCreateReportSelf;
}
