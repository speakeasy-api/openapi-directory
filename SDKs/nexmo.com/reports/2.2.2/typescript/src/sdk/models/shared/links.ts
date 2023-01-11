import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LinksDownloadReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class LinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=download_report" })
  downloadReport?: LinksDownloadReport;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksSelf;
}
