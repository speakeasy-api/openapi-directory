package shared

type TrackMetadataRequestTrackEmbeddableByEnum string

const (
	TrackMetadataRequestTrackEmbeddableByEnumAll  TrackMetadataRequestTrackEmbeddableByEnum = "all"
	TrackMetadataRequestTrackEmbeddableByEnumMe   TrackMetadataRequestTrackEmbeddableByEnum = "me"
	TrackMetadataRequestTrackEmbeddableByEnumNone TrackMetadataRequestTrackEmbeddableByEnum = "none"
)

type TrackMetadataRequestTrackLicenseEnum string

const (
	TrackMetadataRequestTrackLicenseEnumNoRightsReserved  TrackMetadataRequestTrackLicenseEnum = "no-rights-reserved"
	TrackMetadataRequestTrackLicenseEnumAllRightsReserved TrackMetadataRequestTrackLicenseEnum = "all-rights-reserved"
	TrackMetadataRequestTrackLicenseEnumCcBy              TrackMetadataRequestTrackLicenseEnum = "cc-by"
	TrackMetadataRequestTrackLicenseEnumCcByNc            TrackMetadataRequestTrackLicenseEnum = "cc-by-nc"
	TrackMetadataRequestTrackLicenseEnumCcByNd            TrackMetadataRequestTrackLicenseEnum = "cc-by-nd"
	TrackMetadataRequestTrackLicenseEnumCcBySa            TrackMetadataRequestTrackLicenseEnum = "cc-by-sa"
	TrackMetadataRequestTrackLicenseEnumCcByNcNd          TrackMetadataRequestTrackLicenseEnum = "cc-by-nc-nd"
	TrackMetadataRequestTrackLicenseEnumCcByNcSa          TrackMetadataRequestTrackLicenseEnum = "cc-by-nc-sa"
)

type TrackMetadataRequestTrackSharingEnum string

const (
	TrackMetadataRequestTrackSharingEnumPublic  TrackMetadataRequestTrackSharingEnum = "public"
	TrackMetadataRequestTrackSharingEnumPrivate TrackMetadataRequestTrackSharingEnum = "private"
)

type TrackMetadataRequestTrack struct {
	Commentable  *bool                                      `json:"commentable,omitempty"`
	Description  *string                                    `json:"description,omitempty"`
	Downloadable *bool                                      `json:"downloadable,omitempty"`
	EmbeddableBy *TrackMetadataRequestTrackEmbeddableByEnum `json:"embeddable_by,omitempty"`
	Genre        *string                                    `json:"genre,omitempty"`
	Isrc         *string                                    `json:"isrc,omitempty"`
	LabelName    *string                                    `json:"label_name,omitempty"`
	License      *TrackMetadataRequestTrackLicenseEnum      `json:"license,omitempty"`
	Permalink    *string                                    `json:"permalink,omitempty"`
	PurchaseURL  *string                                    `json:"purchase_url,omitempty"`
	Release      *string                                    `json:"release,omitempty"`
	ReleaseDate  *string                                    `json:"release_date,omitempty"`
	Sharing      *TrackMetadataRequestTrackSharingEnum      `json:"sharing,omitempty"`
	Streamable   *bool                                      `json:"streamable,omitempty"`
	TagList      *string                                    `json:"tag_list,omitempty"`
	Title        *string                                    `json:"title,omitempty"`
}

type TrackMetadataRequest struct {
	Track *TrackMetadataRequestTrack `json:"track,omitempty"`
}
