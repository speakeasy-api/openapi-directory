import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BackendMetastoreMetastoreTypeEnum {
    MetastoreTypeUnspecified = "METASTORE_TYPE_UNSPECIFIED",
    DataprocMetastore = "DATAPROC_METASTORE"
}


export class BackendMetastore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metastoreType" })
  metastoreType?: BackendMetastoreMetastoreTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
