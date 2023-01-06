package shared

type TrackDataRequestOnlyForUploadingForProUsers struct {
	OnlyForUploadingForPROUsers string `multipartForm:"name=Only for uploading, for PRO users"`
	Content                     []byte `multipartForm:"content"`
}

type TrackDataRequestOnlyForUploading struct {
	OnlyForUploading string `multipartForm:"name=Only for uploading"`
	Content          []byte `multipartForm:"content"`
}

type TrackDataRequestTrackEmbeddableByEnum string

const (
	TrackDataRequestTrackEmbeddableByEnumAll  TrackDataRequestTrackEmbeddableByEnum = "all"
	TrackDataRequestTrackEmbeddableByEnumMe   TrackDataRequestTrackEmbeddableByEnum = "me"
	TrackDataRequestTrackEmbeddableByEnumNone TrackDataRequestTrackEmbeddableByEnum = "none"
)

type TrackDataRequestTrackLicenseEnum string

const (
	TrackDataRequestTrackLicenseEnumNoRightsReserved  TrackDataRequestTrackLicenseEnum = "no-rights-reserved"
	TrackDataRequestTrackLicenseEnumAllRightsReserved TrackDataRequestTrackLicenseEnum = "all-rights-reserved"
	TrackDataRequestTrackLicenseEnumCcBy              TrackDataRequestTrackLicenseEnum = "cc-by"
	TrackDataRequestTrackLicenseEnumCcByNc            TrackDataRequestTrackLicenseEnum = "cc-by-nc"
	TrackDataRequestTrackLicenseEnumCcByNd            TrackDataRequestTrackLicenseEnum = "cc-by-nd"
	TrackDataRequestTrackLicenseEnumCcBySa            TrackDataRequestTrackLicenseEnum = "cc-by-sa"
	TrackDataRequestTrackLicenseEnumCcByNcNd          TrackDataRequestTrackLicenseEnum = "cc-by-nc-nd"
	TrackDataRequestTrackLicenseEnumCcByNcSa          TrackDataRequestTrackLicenseEnum = "cc-by-nc-sa"
)

type TrackDataRequestTrackSharingEnum string

const (
	TrackDataRequestTrackSharingEnumPublic  TrackDataRequestTrackSharingEnum = "public"
	TrackDataRequestTrackSharingEnumPrivate TrackDataRequestTrackSharingEnum = "private"
)

type TrackDataRequest struct {
	TrackArtworkData  *TrackDataRequestOnlyForUploadingForProUsers `multipartForm:"file"`
	TrackAssetData    *TrackDataRequestOnlyForUploading            `multipartForm:"file"`
	TrackCommentable  *bool                                        `multipartForm:"name=track[commentable]"`
	TrackDescription  *string                                      `multipartForm:"name=track[description]"`
	TrackDownloadable *bool                                        `multipartForm:"name=track[downloadable]"`
	TrackEmbeddableBy *TrackDataRequestTrackEmbeddableByEnum       `multipartForm:"name=track[embeddable_by]"`
	TrackGenre        *string                                      `multipartForm:"name=track[genre]"`
	TrackIsrc         *string                                      `multipartForm:"name=track[isrc]"`
	TrackLabelName    *string                                      `multipartForm:"name=track[label_name]"`
	TrackLicense      *TrackDataRequestTrackLicenseEnum            `multipartForm:"name=track[license]"`
	TrackPermalink    *string                                      `multipartForm:"name=track[permalink]"`
	TrackPurchaseURL  *string                                      `multipartForm:"name=track[purchase_url]"`
	TrackRelease      *string                                      `multipartForm:"name=track[release]"`
	TrackReleaseDate  *string                                      `multipartForm:"name=track[release_date]"`
	TrackSharing      *TrackDataRequestTrackSharingEnum            `multipartForm:"name=track[sharing]"`
	TrackStreamable   *bool                                        `multipartForm:"name=track[streamable]"`
	TrackTagList      *string                                      `multipartForm:"name=track[tag_list]"`
	TrackTitle        *string                                      `multipartForm:"name=track[title]"`
}
