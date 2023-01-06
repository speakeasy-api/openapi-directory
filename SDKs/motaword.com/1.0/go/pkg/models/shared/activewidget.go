package shared

import (
	"time"
)

type ActiveWidget struct {
	CreatedAt                 *time.Time `json:"created_at,omitempty"`
	FollowUser                *bool      `json:"follow_user,omitempty"`
	ForceCacheRefreshInterval *bool      `json:"force_cache_refresh_interval,omitempty"`
	ID                        *int64     `json:"id,omitempty"`
	ModifyLinks               *bool      `json:"modify_links,omitempty"`
	Name                      *string    `json:"name,omitempty"`
	Position                  *string    `json:"position,omitempty"`
	Theme                     *string    `json:"theme,omitempty"`
	Token                     *string    `json:"token,omitempty"`
	URLChangeMode             *string    `json:"url_change_mode,omitempty"`
	URLMode                   *string    `json:"url_mode,omitempty"`
	UseCache                  *bool      `json:"use_cache,omitempty"`
	UseDummyTranslations      *bool      `json:"use_dummy_translations,omitempty"`
}
