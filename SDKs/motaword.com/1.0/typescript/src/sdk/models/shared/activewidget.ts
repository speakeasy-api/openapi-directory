import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActiveWidget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=follow_user" })
  followUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=force_cache_refresh_interval" })
  forceCacheRefreshInterval?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=modify_links" })
  modifyLinks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=url_change_mode" })
  urlChangeMode?: string;

  @SpeakeasyMetadata({ data: "json, name=url_mode" })
  urlMode?: string;

  @SpeakeasyMetadata({ data: "json, name=use_cache" })
  useCache?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_dummy_translations" })
  useDummyTranslations?: boolean;
}
